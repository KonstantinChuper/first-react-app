// 4. Создать <p>, вставить стили из контекста
import React from 'react'
import { useBlogSettingsContext } from './BlogSettingsContext';

export default function Article() {

  const context = useBlogSettingsContext();
  console.log(context)
  return (
    <div>
        <p style={{fontSize: context.font, lineHeight: context.lineHeight}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque asperiores, laudantium similique deserunt autem quasi cumque? Beatae aperiam fugiat possimus consequatur dolorum magni deleniti ratione voluptas, maxime sit nihil tenetur?
        At, harum, unde animi corrupti, excepturi quas voluptas illo fugit quisquam debitis fuga quibusdam eligendi ab! Quas quibusdam esse possimus rerum enim? Cumque expedita cum repudiandae impedit debitis pariatur officiis?
        Similique, deserunt officia ducimus officiis deleniti quis illo nihil, fuga ut velit, quia eius dolores nemo reiciendis! Inventore accusantium voluptates nobis odio numquam, illo, dolor repudiandae fugit cum ducimus delectus.
        Eligendi in impedit voluptatibus nam distinctio enim a facere, nostrum nemo rem non? Vero qui enim assumenda amet minima asperiores dolor veritatis! Accusamus maiores ut necessitatibus maxime hic sint odio.
        Eveniet doloribus distinctio vero minus? Consectetur perferendis ullam blanditiis itaque iure eveniet earum consequuntur atque fugiat laudantium eaque, ea in delectus. Expedita architecto ut laborum cum quo perferendis debitis eius.
        Maiores nam voluptatem, dolorem amet obcaecati odio, quae praesentium beatae officia sed nulla, blanditiis cumque hic voluptates et reiciendis earum tenetur tempore nostrum dignissimos. Doloremque iure quasi eligendi esse rerum.
        Voluptas adipisci perferendis natus sed debitis, neque error sunt sit, cumque officiis voluptates molestias, possimus vel blanditiis illum. Officiis voluptate minima consequatur cupiditate nam dolorum sequi aliquam alias cumque omnis.
        Illum maiores ullam rerum ad voluptates. Veniam quam accusamus ad quaerat nisi itaque earum dolorem consectetur laudantium commodi possimus fuga dolore hic non, quisquam, culpa unde. Ut totam non nihil!
        Quidem et consequuntur debitis error officia asperiores quibusdam praesentium reprehenderit sunt, cumque blanditiis placeat, nihil obcaecati. Ducimus pariatur quidem adipisci veritatis enim necessitatibus temporibus aliquam asperiores magni, voluptatem, saepe nemo.
        Accusantium provident aliquid, perspiciatis consectetur, ratione cupiditate aperiam nemo natus perferendis libero, nam quasi quod at culpa eveniet. Provident ut et nisi exercitationem laudantium voluptas nostrum quis officia quasi accusantium?</p>
    </div>
  )
}
