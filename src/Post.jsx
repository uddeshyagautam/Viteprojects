import React from 'react'

function PostComponent({ name, subtitle, time, image, description }) {
  return (
    <div
      style={{
        width: 250,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        margin: 10,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={image}
          alt='Post'
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
        <div style={{ fontSize: 14, marginLeft: 10 }}>
          <b>{name}</b>
          <div>{subtitle}</div>
          <div>{time}</div>
        </div>
      </div>
      <div style={{ fontSize: 14, marginTop: 10 }}>{description}</div>
    </div>
  )
}

export default PostComponent
