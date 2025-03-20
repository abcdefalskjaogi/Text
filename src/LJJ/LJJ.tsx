//李均杰
import React from 'react';
const LJJ = ()=>{
  const ljjcontent = [
      {
          id:1,
          title:'姓名',
          img:'/1.jpg',
          content:'XK瓜子'
      },
      {
          id:2,
          title:'联系方式',
          img:'/2.jpg',
          content: '19161745355'

      },
      {
        id:3,
        title:'邮箱',
        img:'/3.jpg',
        content: 'xkg1503@email.com'
    }             //留两个时删除第三个即可
  ];
  return (
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        minHeight: '120vh',//两个div块时改为100vh
        padding: '40px',
        position: 'absolute',
        background: `        
          linear-gradient(
            45deg,
            #FFD700,
            #FFC0CB,
            #1E90FF,
            #228B22,
            #282828
          )
        `,
        backgroundSize: '1.5% 1.5%'  //1  瓷砖排列
        // backgroundSize: '400% 200%' //2  渐变排列
      }}>
        
        {ljjcontent.map(item => (
          <div
            key={item.id}
            style={{
              width: '500px',
              minHeight: '250px',
              borderRadius: '10px',
              background: `url(${item.img}) center/cover`,
              boxShadow: '0 06px 20px rgba(0,0,0,0.8)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              padding: '15px',
              color: 'white',
              textShadow: '3px 1px 3px rgba(0,0,0,0.3)'
            }}
          >
            <div style={{
             backgroundColor: 'rgba(0,0,0,0.3)',
             padding: '90px',
             borderRadius: '12px',
             backdropFilter: 'blur(2px)',   //背景模糊
             height: '100%',
             display: 'flex',
             flexDirection: 'row',
             alignItems: 'flex-start', 
             gap: '15px' 
            }}>
              <h2 style={{
                lineHeight: '1.4',
                fontSize: '30px',
                fontFamily:'得意黑'   //不行就宋体

              }}>{item.title}</h2>
              <pre style={{
                margin: 0,
                fontSize: '25px',
                lineHeight: '2',
                fontFamily:'得意黑'   //不行就宋体
              }}>{item.content.split('/').join('\n')}</pre>
            </div>
          </div>
        ))}
      </div>
    );
  };
export default LJJ;


