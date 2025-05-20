"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSettingsStore } from "@/lib/store";
import { useEffect } from "react";
import { formSchema } from "@/config/schemas";
import * as z from "zod";

export const SettingsForm = () => {
  const { settings, updateSettings, darkMode, setDarkMode } =
    useSettingsStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: settings,
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    updateSettings(data);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register("name")} />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register("email")} />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" {...register("password")} />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="darkMode"
          checked={darkMode}
          onCheckedChange={setDarkMode}
        />
        <Label htmlFor="darkMode">Dark Mode</Label>
      </div>
      <Button type="submit">Save Changes</Button>
    </form>
  );
};
