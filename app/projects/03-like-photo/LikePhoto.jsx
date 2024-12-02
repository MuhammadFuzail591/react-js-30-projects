"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Title from '../components/Title';
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from 'react-icons/ai';
function LikePhoto() {
  const [like, setLike] = useState(false)
  const [count, setCount] = useState(0)

  function toggleLike() {
    if (like) {
      setLike(false);
      setCount(count - 1)
    } else {
      setLike(true)
      setCount(count + 1)
    }
  }

  return (
    <div className='container text-center' style={{ width: '60%' }}>
      <Title text={"Like my Photo"} classes={"fs-xl mt-1"} />
      <Title classes={"subtitle fs-sm "} text={`Likes ${count}`} />

      <div className="card card-dark m-auto" style={{ width: "300px", cursor: "pointer" }}>
        <div className="card-header fs-xl">
          <small>M Fuzail</small>
        </div>
        <Image
          src="/M Fuzail.jpeg"
          width={75}
          height={60}
          alt="M Fuzail"
          style={{ height: "fit-content" }}
          onDoubleClick={toggleLike}
        />

        <div className="card-footer fs-xl d-flex" style={{ justifyContent: "space-between" }}>
          <AiOutlineComment />
          {like ? <AiFillHeart className={'text-danger'} onClick={toggleLike} /> : <AiOutlineHeart onClick={toggleLike} />}
        </div>
      </div>
    </div>
  );
}

export default LikePhoto;
