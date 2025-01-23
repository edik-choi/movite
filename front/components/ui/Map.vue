<script lang="ts" setup>
interface Props {
    address: string
}

const props = withDefaults(defineProps<Props>(), {})

const mapRef = ref<HTMLElement | null>(null)
const map = ref<any>(null)
const marker = ref<any>(null)

const initMap = () => {
    if (window.naver && mapRef.value) {
        const position = new window.naver.maps.LatLng(37.5666805, 126.9784147) // 서울시청 기본 위치
        map.value = new window.naver.maps.Map(mapRef.value, {
            center: position,
            zoom: 15,
        })
        marker.value = new window.naver.maps.Marker({
            position,
            map: map.value,
        })
    }
}

const geocodeAddress = async (address: string): Promise<{ lat: number; lng: number } | null> => {
    return new Promise((resolve, reject) => {
        const geocoder = window.naver.maps.Service // Service에서 geocode 호출
        geocoder.geocode(
            { query: address },
            (
                status: naver.maps.Service.Status, // 올바른 타입 적용
                response: naver.maps.Service.GeocodeResponse
            ) => {
                if (status === naver.maps.Service.Status.OK && response.v2.addresses.length > 0) {
                    const result = response.v2.addresses[0]
                    resolve({ lat: parseFloat(result.y), lng: parseFloat(result.x) })
                } else {
                    reject(`Geocoding failed with status: ${status}`)
                }
            }
        )
    })
}

const updateMap = async (address: string) => {
    try {
        const position = await geocodeAddress(address)
        if (position && map.value && marker.value) {
            const newPosition = new window.naver.maps.LatLng(position.lat, position.lng)
            map.value.setCenter(newPosition)
            marker.value.setPosition(newPosition)
        }
    } catch (error) {
        console.error('지도 업데이트 중 오류 발생:', error)
    }
}

watch(
    () => props.address,
    async (newAddress) => {
        if (newAddress) {
            await updateMap(newAddress)
        }
    }
)

onMounted(() => {
    initMap()
})
</script>

<template>
    <div ref="mapRef" class="map" />
</template>

<style lang="scss" scoped>
.map {
    width: 100%;
    height: 300px;
    border-radius: 8px;
}
</style>
