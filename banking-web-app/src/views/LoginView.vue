<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'

const email = ref('')
const password = ref('')
const errors = ref([])
const router = useRouter()
const userStore = useUserStore()

onMounted(() => {
    if (userStore.isLoggedIn) {
        router.replace('/deposit')
    }
})

const handleLogin = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    errors.value = []
    
    if (!email.value || !password.value) {
        errors.value.push('กรุณากรอกข้อมูลให้ครบ')
        return
    }
    if (!emailRegex.test(email.value)) {
        errors.value.push('รูปแบบอีเมลไม่ถูกต้อง')
    }
    if (password.value.length < 8) {
        errors.value.push('รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร')
    }
    if (password.value.length > 16) {
        errors.value.push('รหัสผ่านต้องมีไม่เกิน 16 ตัวอักษร')
    }
    if (errors.value.length > 0) {
        return
    }
    userStore.login(email.value)
    router.replace('/deposit')
}
</script>

<template>
    <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div class="card shadow p-4" style="width: 400px;">
            <h3 class="fs-4 fw-bold text-center text-primary mb-4">Banking Website App</h3>

            <form @submit.prevent="handleLogin">
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input 
                        v-model="email" 
                        type="text" 
                        class="form-control" 
                        placeholder="example@domain.com"
                    />
                </div>

                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input 
                        v-model="password" 
                        type="password" 
                        class="form-control" 
                        placeholder="********"
                    />
                </div>
                
                <div v-if="errors.length > 0" class="alert alert-danger">
                    <h6 class="fw-bold">กรุณาตรวจสอบข้อมูลที่กรอกดังต่อไปนี้:</h6>
                    <ul>
                        <li v-for="(error, index) in errors" :key="index">
                            {{ error }}
                        </li>
                    </ul>
                </div>

                <button type="submit" class="btn btn-primary w-100">
                    Login
                </button>
            </form>
        </div>
    </div>
</template>