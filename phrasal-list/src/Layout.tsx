import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar'
import { AppSidebar } from './components/ui/app-sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Bell } from 'lucide-react';


function Layout({children}: {children?: any}) {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <main className='w-full'>
                    <SidebarTrigger className='flex sticky top-0 h-[60px] rounded-[0] border-b border-b-gray-200 z-10'/>
                    {/* Todo el content que no pertenezca al sidebar */}
                    {children}
                </main>
                <div 
                className='flex items-center justify-end right-4 
                fixed top-0 h-[60px] w-full border-b border-b-gray-200 gap-4 bg-white'>
                    <Bell size={20}/>
                    <Avatar>
                        <AvatarImage></AvatarImage>
                        <AvatarFallback className='bg-amber-100 p-2 rounded-full'>
                            UN
                        </AvatarFallback>
                    </Avatar>
                    <h3 className='font-medium'>
                        User_Name
                    </h3>
                </div>
            </SidebarProvider>
            
            
        </>
    )
}

export default Layout;