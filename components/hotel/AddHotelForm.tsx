
'use client'
import { Hotel, Room } from '@prisma/client';

import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';
import { useState } from 'react';


interface AddHotelFormProps{
    hotel:HotelWithRooms | null
}
export type HotelWithRooms = Hotel & {
    rooms: Room []
}

const formSchema = z.object({
    title: z.string().min(3,{
        message:'Tiltle  must be atleast 3 character long'
    }) ,
    description  : z.string().min(10,{
        message:'atleast 1o words'
    }),

    image : z.string().min(1,{
        message:'Image is required'
    }) ,

    country: z.string().min(1,{
        message:'Country is required'
    }) ,            
    state : z.string().optional(),                  
    city  :   z.string().optional(),                      
    locationDescription : z.string().min(10,{
        message:'atleast 10'
    })  , 
    gym : z.boolean().optional(),
   library: z.boolean().optional(),
   bar: z.boolean().optional(),
  laundry: z.boolean().optional(),
  restaurant: z.boolean().optional(),
  shopping: z.boolean().optional(),
  freeParking: z.boolean().optional(),
  bikeRental: z.boolean().optional(),
  freeWifi: z.boolean().optional(),
  movieNights: z.boolean().optional(),             
    swimmingPool : z.boolean().optional(),              
    coffeeShop   : z.boolean().optional(),                
})

const AddHotelForm = ( {hotel} : AddHotelFormProps) => {

  const [image,setImage] = useState<string | undefined>(hotel?.image)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        
            title      :          '',
            description :         '',
            image    :            '',
            country :             '',
            state  :              '',
            city  :               '',
            locationDescription : '',
            gym   :       false,              
            library  :         false,       
            bar :          false,       
            laundry     :   false,      
            restaurant :    false,      
            shopping     :  false,      
            freeParking   :  false,     
            bikeRental     : false,     
            freeWifi       : false,     
            movieNights    : false,     
            swimmingPool    : false,    
            coffeeShop       : false,   
        },
      })
         
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
    
      

  return (
    <div>
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <h3 className='text-lg font-semibold'>{hotel ? 'Update your hotel!':'Describe your hotel!'}</h3>
        <div className='flex flex-col md:flex-row gap-6'> 
            <div className='flex-1 flex flex-col gap-6'> 
            <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
            <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hotel Description</FormLabel>
              <FormDescription>
                Provide a detail description of your hotel
              </FormDescription>
              <FormControl>
              <Textarea placeholder='Home is beatifully styled' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <FormLabel>Choose Amenitiess</FormLabel>
          <FormDescription>Choose Amenities popular</FormDescription>
          <div className='grid grid-cols-2 gap-4 mt-3'>
            <FormField
               control={form.control}
               name="gym"
               render={({ field }) => (
                 <FormItem className='flex flex-row items-end space-x-3 rounded-md border p-4'>
                   {/* <FormDescription>
                     Provide a detail description of your hotel
                   </FormDescription> */}
                   <FormControl>
                      <Checkbox   checked= {field.value}
                       onCheckedChange={field.onChange} />
                   </FormControl>
                   <FormLabel>library</FormLabel>
                   <FormMessage />
                 </FormItem>
               )}
            />
           
            <FormField
               control={form.control}
               name="library"
               render={({ field }) => (
                 <FormItem className='flex flex-row items-end space-x-3 rounded-md border p-4'>
                   {/* <FormDescription>
                     Provide a detail description of your hotel
                   </FormDescription> */}
                   <FormControl>
                      <Checkbox   checked= {field.value}
                       onCheckedChange={field.onChange} />
                   </FormControl>
                   <FormLabel>Gym</FormLabel>
                   <FormMessage />
                 </FormItem>
               )}
            />

            <FormField
               control={form.control}
               name="swimmingPool"
               render={({ field }) => (
                 <FormItem className='flex flex-row items-end space-x-3 rounded-md border p-4'>
                   {/* <FormDescription>
                     Provide a detail description of your hotel
                   </FormDescription> */}
                   <FormControl>
                      <Checkbox   checked= {field.value}
                       onCheckedChange={field.onChange} />
                   </FormControl>
                   <FormLabel> swimmingPool</FormLabel>
                   <FormMessage />
                 </FormItem>
               )}
            />
          </div>

        </div>
          <FormField 
          control={form.control}

          name = 'image'
          render={({field}) =>(
            <FormItem className='flex flex-col space-y-3'>
              <FormLabel>Uploaddd an Image</FormLabel>
              <FormDescription>Choose an image that will describe your room nicely</FormDescription>
              <FormControl>
              {image ? <></> : <></>}
              </FormControl>
            </FormItem>
          )}
            />
            </div>
            <div className='flex-1 flex flex-col gap-6'>part 2</div>
        </div>

        </form>
    </Form>
    </div>
  );
}

export default AddHotelForm;