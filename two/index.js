var draw = SVG('drawing');


axios.get('/order/freelance.svg')
.then((data)=> drawing(data.data))

var inter;

function drawing(svg){
    draw.svg(svg)
    var left = SVG.get('leftKran'),
        body = SVG.get('leftStand'),
        front = SVG.get('front'),
        middle = SVG.get('middle'),
        pathK = SVG.get('kranPath'),
        frontKran = SVG.get('frontKran'),
        lez = SVG.get('lez')

    console.log(Object.keys(left.node));
    //left.center(10, 10)

    front.opacity(0);
    middle.opacity(0);

    var MM = 30;

    var interval = 800;

    front.scale(0.7, 1);


    // var rect = draw.rect(97,67);
    // rect.back()
    //
    // var rect2 = draw.rect(47,237);

    //var el = draw.circle(60);

    //el.back()

  //  rect.opacity(0)
    //rect2.opacity(0)
    //el.opacity(0)

    //rect.toParent(body)
    //rect2.toParent(body)
    //el.toParent(body)


  //  rect.delay(interval*.1).animate(20).opacity(1)
    //rect2.delay(interval*.1).animate(20).opacity(1)
    //el.delay(interval*.1).animate(20).opacity(1)

    //el.move(427, 370)
    //.fill('#F2A01C')

    //el.toParent(rect)



    // rect2.move(390,163).radius(11).fill('#F2A01C') //.delay(interval*.1)
    // .animate(interval).move(220, 163).opacity(1)
    // rect2.back();



    //el.animate(interval).move(220, 370).opacity(1)

    // rect.radius(16)
    // .move(390, 390)
    // .fill('#F2A01C')
    // //.delay(interval*.1)
    // .animate(interval).move(220, 390).opacity(1).after((e)=>{
    //   rect.remove()
    //   rect2.remove()
    // })
    //console.log(rect);
    //SVG.get(rect.attr('id')).remove()
    //pathK.delay(500).attr('d', 'M350,132l-14-5c0,0-5-2-6,4h-4c0,0-2-6-12-7l-23-1c0,0-2-4-8-4s-23,0-23,0s-25-8-29-14h-23c0,0-11,5-11,19l-1,26h22l2,7l9-7c0,0,26-4,33-2s26,4,29,1h18v8c0,0,3,3,5,3v4l3,2c0,0,14,3,20,1l4-8h4c0,0,7-4,7-15C352,144,352,138,350,132zM329,143c-4,0-3-3-3-3h5C331,140,333,143,329,143z');


    //left.animate(1000).transform({ rotation: 100, relative: true });

    //left.animate(1000).move(25, -60).rotate(-45) //.scale(0, 1)

    var MX = -70;


    //body.animate(interval).opacity(0)
    left.animate(interval*.8).move(-(105-MX), 0)
    .scale(0, 1)
    .transform({ rotation: -60 , cx: 280, cy: 140 }).after(()=>{

      left.animate(100).opacity(0)

    })


    middle.delay(500).animate(1).opacity(1)

    middle.delay(100).animate(interval*.6).move(-(-MX+30), 0).scale(0, 1).opacity(0)

    body.animate(interval).move(MX, 0).scale(0, 1);


    front.delay(interval*.9).animate(interval*.1).opacity(1).after(_=>{
      lez.animate(120).scale(-1,1).loop(14)
      frontKran.animate(interval*2.3).move(0,15).after(_=>{
        frontKran.animate(interval).move(0,0)
      })
    })

    front.scale(1, 1); //.move(0, 0);
    //left.animate(1000)


    //element.fill('#f06')
}
