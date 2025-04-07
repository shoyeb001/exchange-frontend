import loginSchema from "@/zod/loginSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Logo from "/logo.png"
import { Card } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"
const Login = () => {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    function onSubmit(values: z.infer<typeof loginSchema>) {
        console.log(values)
    }

    return (
        <Card className="bg-base-background-1 py-5 px-6  max-w-[380px] m-auto">
            <div className="flex gap-2 flex-col">
                <img src={Logo} className="w-15 h-15 m-auto" />
                <h2 className="font-medium text-center text-xl">Sign in</h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-between">
                            <p>New Here? <Link to="/register" className="text-ancent-text">Sign up</Link> </p>
                            <p>
                                <Link to="/forget-password" className="text-ancent-text">Forget password</Link>
                            </p>
                        </div>
                        <Button type="submit" size={"lg"} className="w-full h-12 text-md cursor-pointer">Login</Button>
                    </form>
                </Form>
            </div>
        </Card>
    )
}

export default Login