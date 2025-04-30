import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
        .string()
        .required("Email is required")
        .email("Invalid email format"),
    phone: yup
        .string()
        .required("Phone is required")
        .matches(
            /^(\+)?[0-9]+$/,
            "Phone must be numbers only (optional + at start)"
        ),
});

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const res = await fetch(
                "http://upskilling-egypt.com:3001/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (res.ok) {
                Swal.fire("Success", "Form submitted successfully!", "success");
                reset();
            } else {
                Swal.fire("Error", "Failed to send form.", "error");
            }
        } catch (err) {
            Swal.fire("Error", "Something went wrong. Try again.", "error");
            console.error(err);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-sm mx-auto mt-10 space-y-4 flex flex-col items-center"
        >
            {["name", "email", "phone"].map((field) => (
                <div key={field} className="w-full flex flex-col items-center">
                    <input
                        {...register(field)}
                        placeholder={field[0].toUpperCase() + field.slice(1)}
                        className={`w-[374px] max-w-[80%] h-[56px] rounded-full px-5 py-3 placeholder-black outline-none transition-all duration-300 ${
                            errors[field]
                                ? "border border-red-400"
                                : "border border-gray-300"
                        }`}
                        disabled={isSubmitting}
                    />
                    {errors[field] && (
                        <span className="text-red-500 text-sm mt-1 animate-fade-in">
                            {errors[field]?.message}
                        </span>
                    )}
                </div>
            ))}

            <button
                type="submit"
                disabled={isSubmitting}
                className={`w-[168px] h-[56px] rounded-full border-2 border-blue-500 text-blue-500 font-medium py-2 transition ${
                    isSubmitting
                        ? "opacity-60 cursor-not-allowed"
                        : "hover:bg-blue-50"
                }`}
            >
                {isSubmitting ? (
                    <div className="flex justify-center items-center space-x-2">
                        <svg
                            className="animate-spin h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                            ></path>
                        </svg>
                    </div>
                ) : (
                    "Send"
                )}
            </button>
        </form>
    );
};

export default ContactForm;
