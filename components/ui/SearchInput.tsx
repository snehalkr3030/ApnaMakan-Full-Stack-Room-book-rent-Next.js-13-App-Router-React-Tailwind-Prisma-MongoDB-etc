'use client'
import { Search } from "lucide-react"
import { Input } from "./input"
const SearchInput = () => {
  return (<div className="relative sm:block hidden pl-36"> 
        <Search className="absolute h-4 w-4 top-3 left-59 text-muted-foreground"/>
        <Input placeholder="Search"
        className="pl-7 bg-primary/10" />
        </div>
  )
}

export default SearchInput