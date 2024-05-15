import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  const defaultMessage = '云厂出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        // {
        //   key: '云智能 BI',
        //   title: '云智能 BI',
        //   href: 'https://pro.ant.design',
        //   blankTarget: true,
        // },
        {
          key: 'github',
          title: <><GithubOutlined/> 贰拾 Github </>,
          href: 'https://github.com/Ershi-Gu',
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: '湘ICP备2024062025号',
          href: 'https://beian.miit.gov.cn',
          blankTarget: true,
        },
      ]}
      copyright={`${currentYear} ${defaultMessage}`}
    />
  );
};

export default Footer;
