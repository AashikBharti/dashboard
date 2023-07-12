import DashboardIcon from '../components/DashboardIcon'
import { IoLogOutOutline } from 'react-icons/io5'
import { LuLayoutDashboard } from 'react-icons/lu'
import { PiNotebook } from 'react-icons/pi'
import { GiMoneyStack } from 'react-icons/gi'
import { FiUserPlus } from 'react-icons/fi'
import { AiOutlineSchedule } from 'react-icons/ai'
import { AiFillSetting } from 'react-icons/ai'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { LuLibrary } from 'react-icons/lu'

function Dashboard() {
    return (
        <div className='w-1/5 h-screen flex flex-col items-start p-5'>
            <div className='text-2xl font-semibold h-32  text-white'>Logo</div>
            <div className='h-3/5'>
                <DashboardIcon icon={<LuLayoutDashboard size={22} />} title={'Dashboard'} />
                <DashboardIcon icon={<PiNotebook size={22} />} title={'LeaderBoard'} />
                <DashboardIcon icon={<GiMoneyStack size={22} />} title={'Sales'} />
                <DashboardIcon icon={<FiUserPlus size={22} />} title={'Administration'} />
                <DashboardIcon icon={<AiOutlineSchedule size={22} />} title={'Schedule'} />
                <DashboardIcon icon={<AiFillSetting size={22} />} title={'Settings'} />
                <DashboardIcon icon={<AiOutlineUsergroupAdd size={22} />} title={'Support'} />
                <DashboardIcon icon={<LuLibrary size={22} />} title={'Library'} />
            </div>
            <div className='text-white flex items-center mt-10 gap-x-2 cursor-pointer'>
                <IoLogOutOutline size={25} />
                <h1 className='text-md'>Logout</h1>
            </div>
        </div>
    )
}

export default Dashboard