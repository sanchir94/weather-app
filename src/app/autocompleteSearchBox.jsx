// "use client";

// import * as React from "react";
// import { Check, ChevronsUpDown } from "lucide-react";
// import { useState } from "react";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// export function ComboboxDemo() {
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState("");
//   const [city, setMyCities] = useState([]);

//   React.useEffect(() => {
//     let arr = [];
//     fetch("https://countriesnow.space/api/v0.1/countries")
//       .then((response) => {
//         return response.json();
//       })
//       .then((res) => {
//         console.log(res.data);
//         for (var i = 0; i < res.data.length; i++) {
//           arr.push(res.data[i].cities);
//         }

//         setMyCities(arr);
//       }),
//       [];
//   });
//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           role="combobox"
//           aria-expanded={open}
//           className="w-[200px] justify-between"
//         >
//           {value
//             ? city.find((city) => city.value === value)?.label
//             : "Select city..."}
//           <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-[200px] p-0">
//         <Command>
//           <CommandInput placeholder="Search city..." />
//           <CommandList>
//             <CommandEmpty>No city found.</CommandEmpty>
//             <CommandGroup>
//               {city.map((city) => (
//                 <CommandItem
//                   key={city.value}
//                   value={city.value}
//                   onSelect={(currentValue) => {
//                     setValue(currentValue === value ? "" : currentValue);
//                     setOpen(false);
//                   }}
//                 >
//                   <Check
//                     className={cn(
//                       "mr-2 h-4 w-4",
//                       value === city.value ? "opacity-100" : "opacity-0"
//                     )}
//                   />
//                   {city.label}
//                 </CommandItem>
//               ))}
//             </CommandGroup>
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   );
// }
