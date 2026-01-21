"use server";

const submitSignInForm = async (previousState: unknown, formData: FormData) => {
    const email = formData.get('email');
    const password = formData.get('password');
    
    if (!email || !password) {
        return { success: false, error: "Missing fields" };
    }

    if (!email || !password) {
        return { success: false, error: "Missing fields" };
    }

    const res = await fetch("http://localhost:8081/api/signin", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        cache: "no-store",
    });

    if (!res.ok) {
        const err = await res.text();
        return { success: false, error: err };
    }

    return { success: true };
}

export default submitSignInForm;