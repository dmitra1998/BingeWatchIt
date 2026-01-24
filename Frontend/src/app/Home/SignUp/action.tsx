"use server";

const submitSignUpForm = async (previousState: unknown, formData: FormData) => {
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const username = formData.get('username');
    const email = formData.get('email');
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
        body: JSON.stringify({ firstName, lastName, username, email, password, confirmPassword }),
        cache: "no-store",
    });

    if (!res.ok) {
        const err = await res.text();
        return { success: false, error: err };
    }

    return { success: true };
}

export default submitSignUpForm;