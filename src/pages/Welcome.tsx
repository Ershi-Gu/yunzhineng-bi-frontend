import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, theme } from 'antd';
import React from 'react';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
const InfoCard: React.FC<{
  title: string;
  index: number;
  desc: string;
  href: string;
}> = ({
  title,
  href,
  index,
  desc,
  showLink = true,
  linkText = '了解更多 >',
  openInNewTab = true,
}) => {
  const { useToken } = theme;

  const { token } = useToken();

  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        borderRadius: '8px',
        fontSize: '14px',
        color: token.colorTextSecondary,
        lineHeight: '22px',
        padding: '16px 19px',
        minWidth: '220px',
        flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            lineHeight: '22px',
            backgroundSize: '100%',
            textAlign: 'center',
            padding: '8px 16px 16px 12px',
            color: '#FFF',
            fontWeight: 'bold',
            backgroundImage:
              "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
          }}
        >
          {index}
        </div>
        <div
          style={{
            fontSize: '16px',
            color: token.colorText,
            paddingBottom: 8,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          fontSize: '14px',
          color: token.colorTextSecondary,
          textAlign: 'justify',
          lineHeight: '22px',
          marginBottom: 8,
        }}
      >
        {desc}
      </div>
      {showLink && (
        <a
          href={href}
          target={openInNewTab ? '_blank' : '_self'}
          rel={openInNewTab ? 'noreferrer' : undefined}
          onClick={(e) => {
            if (!openInNewTab) e.stopPropagation();
          }}
        >
          {linkText}
        </a>
      )}
    </div>
  );
};

const Welcome: React.FC = () => {
  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');
  return (
    <PageContainer>
      <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={{
          backgroundImage:
            initialState?.settings?.navTheme === 'realDark'
              ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
              : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}
      >
        <div
          style={{
            backgroundPosition: '100% -30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '274px auto',
            backgroundImage:
              "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
          }}
        >
          <div
            style={{
              fontSize: '20px',
              color: token.colorTextHeading,
            }}
          >
            欢迎使用 云智能 BI
          </div>
          <p
            style={{
              fontSize: '14px',
              color: token.colorTextSecondary,
              lineHeight: '22px',
              marginTop: 16,
              marginBottom: 32,
              width: '65%',
            }}
          >
            云智能 BI 是一款区别于传统 BI 的数据分析平台,
            您可以在这里使用人工智能分析您所期待的数据，同时可以选择不同的数据响应格式进行查看。
            以及您可以在我的图表界面管理自己生成的图表。
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <InfoCard
              index={1}
              href="/user/login"
              title="开始您的旅程"
              showLink={true}
              linkText="前往登录 / 注册 >" // 自定义链接文本
              openInNewTab={false} // 不打开新页面
              desc="想要使用云智能 BI, 您需要先有一个账号哦, 目前免费开放注册。👇点击下方快来注册吧。"
            />
            <InfoCard
              index={2}
              title="前往智能分析页面"
              href="/add_chart"
              showLink={true}
              linkText="前往智能分析 >" // 自定义链接文本
              openInNewTab={false} // 不打开新页面
              desc="我们提供同步 / 异步两种智能分析, 如果你时间充足, 可以在同步页面等待图表的返回, 即使查看; 如果您不想等待
              可以前往异步页面, 添加数据后在我的图标界面查看结果。"
            />
            <InfoCard
              index={3}
              title="了解 云出品"
              href="https://github.com/Ershi-Gu"
              showLink={true}
              linkText="了解云出品 >" // 自定义链接文本
              openInNewTab={true} // 不打开新页面
              desc="如果您希望关注更多云出品的产品(比如 Ershi API-一款好用的 API 开放平台), 欢迎点击连接了解更多"
            />
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
