import { Menu } from 'antd';
import react, { useState } from 'react';


const Icons = {
    DashboardOutlined: require('@ant-design/icons/DashboardOutlined').default,
    UserOutlined: require('@ant-design/icons/UserOutlined').default,
    BarChartOutlined: require('@ant-design/icons/BarChartOutlined').default,
};

funcion MenuDynamic() {
    const [menuItems, setMenuItems] = useState([]);
    const navigate = useNavigate();
    const fakeMenuData = [
        {
            title: "Dashboard",
            path: "/dashboard",
            icon: "DashboardOutlined",
            roles: ["665a1f2b40fd3a12b3e77611"]
        },
        {
            title: "Usuarios",
            path: "/users",
            icon: "UserOutlined",
            roles: ["665a1f2b40fd3a12b3e77612"]
        },
        {
            title: "Reportes",
            path: "/reports",
            icon: "BarChartOutlined",
            roles: ["665a1f2b40fd3a12b3e77611", "665a1f2b40fd3a12b3e77612"]
        }
    ];

    useEffect(() => {
        setTimeout(() => {
            setMenuItems([
                setMenuItems(fakeMenuData.filter(item => item.roles.includes("665a1f2b40fd3a12b3e77611"))),
            ]);
        }, 500)
    }, []);

    const renderMenu= () => {
        return menuItems.map((item:any)=>{
            const IconComponent= Icons[item.icon as keyof typeof Icons];
            return {
                key: item.path,
                icon: IconComponent ? <IconComponent /> : null,
                label: item.title,
            }
        })
    }

    return(
        <Menu
        theme="dark"
        mode="inline"
        selectedkeys={[location.pathname]}
        onClick={({ key }) => navigate(key) }
        items={renderMenu()}
        style={{height: '100vh', borderRight: 0}}
        />
    )
}