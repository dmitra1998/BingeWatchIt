"use server";

const submitSignUpForm = async (previousState: unknown, formData: FormData) => {
    const email = formData.get('email');
    const username = formData.get('username');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    if (!email || !password || !confirmPassword || !username) {
        return { success: false, error: "Missing fields" };
    }

    const res = await fetch("http://localhost:8081/api/signup", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password, confirmPassword }),
        cache: "no-store",
    });

    if (!res.ok) {
        const err = await res.text();
        return { success: false, error: err };
    }

    return { success: true };
}

export default submitSignUpForm;