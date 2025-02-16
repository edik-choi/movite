const user = ref<any>(null)

// ✅ 로그인 정보 가져오기
const loadUser = () => {
    const storedUser = localStorage.getItem('naverUser')
    user.value = storedUser ? JSON.parse(storedUser) : null
}

// ✅ 로그아웃 함수
const logout = () => {
    localStorage.removeItem('naverUser') // 사용자 정보 삭제
    user.value = null
    window.location.href = '/login' // 로그인 페이지로 이동
}

export function useAuth() {
    return { user, loadUser, logout }
}
