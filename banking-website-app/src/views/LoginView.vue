<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';

const email = ref('')
const password = ref('')
const router = useRouter()
const userStore = useUserStore()

onMounted(() => {
    if (userStore.isLoggedIn) {
        router.replace('/deposit')
    }
})

const handleLogin = () => {
    const emailRegex = /^[a-zA-Z][^\s@]*@[^\s@]+\.[a-zA-Z]{2,}$/
    
    if (!emailRegex.test(email.value)) {
        alert('รูปแบบอีเมลไม่ถูกต้อง')
        return
    }
    if (!email.value || !password.value) {
        alert('กรุณากรอกข้อมูลให้ครบ')
        return
    }
    userStore.login(email.value)
    router.replace('/deposit')
}
</script>

<template>
    <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div class="card shadow p-4" style="width: 400px;">
            <h3 class="text-center mb-4">Banking Website App</h3>

            <form @submit.prevent="handleLogin">
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input 
                        v-model="email" 
                        type="text" 
                        class="form-control" 
                        placeholder="example@domain.com"
                        maxlength="50"
                        required
                    >
                </div>

                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input 
                        v-model="password" 
                        type="password" 
                        class="form-control" 
                        placeholder="********"
                        maxlength="20"
                        required
                    >
                </div>

                <button type="submit" class="btn btn-primary w-100">
                    Login
                </button>
            </form>
        </div>
    </div>
</template>