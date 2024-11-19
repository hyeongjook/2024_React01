import React from 'react';

function Item({name, isPacked}) {
  /*   if (isPacked){
        return <li> {name} ✅ </li>
    } else {
    return <li> {name} </li>
    } */
   
    // 조건부로 null 반환하면 아무것도 반환하지 않는다
 /*    if (isPacked){
        return <li> {name} ✅ </li>
    } else {
    return <li> {name} </li>
    } */

    // && 연산자
    // 참이면 ✅표시, 거짓이면 표시하지 않음
    return (
        <li> {name} {isPacked && '✅'} </li>
    );
}

export default Item;