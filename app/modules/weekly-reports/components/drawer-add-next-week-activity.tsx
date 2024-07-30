"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import nextWeekActivitySlice from "@/lib/_redux/slices/createNextWeekActivity";
import { useDispatch } from "react-redux";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  activity: z.string().min(2).max(50),
});

const DrawerAddNextWeekActivity = () => {
  const { setActivity } = nextWeekActivitySlice.actions;
  const dispatch = useDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      activity: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { activity } = values;
    dispatch(setActivity({ activity }));
  }

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Add Next Week Activity</SheetTitle>
        <SheetDescription>
          {`Make changes to your profile here. Click save when you're done.`}
        </SheetDescription>
      </SheetHeader>
      <div className="flex flex-col gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="activity"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Activity</FormLabel>
                  <FormControl>
                    <Input placeholder="Juan Dela Cruz" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Add</Button>
              </SheetClose>
            </SheetFooter>
          </form>
        </Form>
      </div>
    </SheetContent>
  );
};

export default DrawerAddNextWeekActivity;
