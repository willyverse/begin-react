import React from 'react';

// // 함수형 컴포넌트의 첫 글자는 무조건 대문자
// function Hello() {
//     return <div>안녕하세요</div>
// }

const Hello = ({ text: customText, color, isSpecial }) => {
    const obj = {
        customText
    }
    return (
        <div style={{ color }}>{isSpecial ? <b>*</b> : null}{customText}</div>
    )
}

Hello.defaultProps = {
    text: '디폴트'
}

export default Hello;