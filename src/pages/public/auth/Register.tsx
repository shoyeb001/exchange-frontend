import { Card } from "@/components/ui/card"
import Logo from "/logo.png"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import registerSchema from "@/zod/registerSchema"
const Register = () => {
    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            privacy: false
        },
    })

    function onSubmit(values: z.infer<typeof registerSchema>) {
        console.log(values)
    }

    return (
        <Card className="bg-base-background-1 py-5 px-6  max-w-[380px] m-auto">
            <div className="flex gap-2 flex-col">
                <img src={Logo} className="w-15 h-15 m-auto" />
                <h2 className="font-medium text-center text-xl">Register</h2>
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
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Confirm Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="privacy"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md px-2 shadow">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="leading-none">
                                        <FormLabel className="text-sm">
                                            By signing up, I agree to the User Agreement and Privacy Policy.
                                        </FormLabel>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <Button type="submit" size={"lg"} className="w-full h-12 text-md cursor-pointer">Sign up</Button>
                    </form>
                </Form>
            </div>
        </Card>
    )
}

export default Register