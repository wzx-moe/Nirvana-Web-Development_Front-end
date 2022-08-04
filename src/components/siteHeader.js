import { HomeOutlined, AppstoreOutlined,  SettingOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import '../less/header.less'

const items = [
    {
        label: 'Logo here',
        key: 'Logo',
        id: 'Logo',
    },
    {
        label: 'My Instagram',
        key: 'Instagram link',
        icon: <InstagramOutlined />,
    },
    {
        label: 'My Facebook',
        key: 'facebook link',
        icon: <FacebookOutlined />,
    },
    {
        label: 'Home',
        key: 'home',
        icon: <HomeOutlined />,
    },
    {
        label: 'About',
        key: 'about',
        icon: <AppstoreOutlined />,
    },
    {
        label: 'Contact',
        key: 'contact',
        icon: <SettingOutlined />,
    },
    {
        label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Resources
        </a>
        ),
        key: 'resources',
    },
];

const SiteHeader = () => {
  return <Menu mode="horizontal" items={items} />;
};

export default SiteHeader;