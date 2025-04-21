// src/pages/email/email.js
import { useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import emailjs from "@emailjs/browser"
import Header from "@/component/Header/header"
import Footer from "@/component/Footer/footer"
import styles from './email.module.css'

export default function EmailForm() {
    const form = useRef()
    const [captchaToken, setCaptchaToken] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
    const handleCaptcha = (token) => {
        setCaptchaToken(token)
    }

    const sendEmail = async (e) => {
        e.preventDefault()

        if (!captchaToken) {
            alert("reCAPTCHA を完了してください。")
            return
        }

        setIsSubmitting(true)

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            alert("送信に成功しました！")
            form.current.reset()
            setCaptchaToken(null)
        } catch (error) {
            alert("送信に失敗しました: " + error.text)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <Header />
            <div className={styles.container}>
                <h1>お問い合わせ</h1>
                <form ref={form} onSubmit={sendEmail} className={styles.form}>
                    <input type="text" name="name" placeholder="お名前" required />
                    <input type="email" name="email" placeholder="メールアドレス" required />
                    <input type="text" name="title" placeholder="件名" required />
                    <textarea name="message" placeholder="お問い合わせ内容" required />

                    <ReCAPTCHA
                        sitekey={RECAPTCHA_SITE_KEY}
                        onChange={handleCaptcha}
                    />

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "送信中..." : "送信"}
                    </button>
                </form>
            </div>
            <Footer />
        </>
    )
}
