import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function InputWithButton({placeholder, className, generalClassName}: {placeholder:string, className?: string, generalClassName?:string}) {
  return (
    <div className={cn(
        "flex w-full items-center space-x-2 relative flex-1",
        generalClassName
      )}>
      <Input type="text" placeholder={placeholder} className={cn(
        'pl-10',
        className
      )}/>
      <Button type="submit" className="-left-3 absolute">
        <svg width='20px' height='20px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
      </Button>
    </div>
  )
}
