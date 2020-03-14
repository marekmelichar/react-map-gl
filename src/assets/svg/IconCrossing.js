// import React from 'react'

// const IconCrossing = props => {
//   return(
//     <svg id="IconCrossing" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
//       <g id="icon-crossing" transform="translate(12313 -3271)">
//         <g id="Ellipse_8" data-name="Ellipse 8" transform="translate(-12313 3271)" fill="#fff" stroke="red" strokeWidth="4">
//           <circle cx="20" cy="20" r="20" stroke="none"/>
//           <circle cx="20" cy="20" r="18" fill="none"/>
//         </g>
//         <g id="Union_2" data-name="Union 2" transform="translate(-12304.75 3283)" fill="#fff">
//           <path d="M 20.22740936279297 13.81736373901367 L 11.99970054626465 9.067138671875 L 11.74970054626465 8.922799110412598 L 11.49970054626465 9.067138671875 L 3.271992206573486 13.81736373901367 L 1.471794724464417 13.601393699646 L 2.185074090957642 11.93337059020996 L 8.824640274047852 8.100049018859863 L 9.574650764465332 7.667038917541504 L 8.824640274047852 7.234028816223145 L 2.184245109558105 3.400237083435059 L 1.472276926040649 1.7328941822052 L 3.272095203399658 1.516233921051025 L 11.5001802444458 6.266668796539307 L 11.7501802444458 6.411008834838867 L 12.0001802444458 6.266668796539307 L 20.22825622558594 1.516234040260315 L 22.0278434753418 1.732866406440735 L 21.31522941589355 3.400194644927979 L 14.6752405166626 7.233758926391602 L 13.92523097991943 7.666769027709961 L 14.6752405166626 8.09977912902832 L 21.31518936157227 11.93332004547119 L 22.02782821655273 13.60136699676514 L 20.22740936279297 13.81736373901367 Z" stroke="none"/>
//           <path d="M 20.33320236206055 13.30108642578125 L 21.30596542358398 13.18438339233398 L 20.92087745666504 12.2830228805542 L 14.4252405166626 8.532798767089844 L 12.92523097991943 7.666769027709961 L 14.4252405166626 6.80073881149292 L 20.92093849182129 3.050480127334595 L 21.30598449707031 2.149573802947998 L 20.33395957946777 2.032562494277954 L 12.2501802444458 6.699688911437988 L 11.7501802444458 6.988358974456787 L 11.2501802444458 6.699688911437988 L 3.166391134262085 2.032562255859375 L 2.193899154663086 2.149629831314087 L 2.578603982925415 3.050561904907227 L 9.074640274047852 6.801009178161621 L 10.57465076446533 7.667038917541504 L 9.074640274047852 8.533068656921387 L 2.579312086105347 12.28311538696289 L 2.193888902664185 13.18443775177002 L 3.166199684143066 13.30108642578125 L 11.24970054626465 8.634119033813477 L 11.74970054626465 8.345449447631836 L 12.24970054626465 8.634119033813477 L 20.33320236206055 13.30108642578125 M 20.12162971496582 14.33363914489746 L 11.74970054626465 9.500148773193359 L 3.377770662307739 14.33363914489746 L 0.7497005462646484 14.01834869384766 L 1.790830492973328 11.58363914489746 L 8.574640274047852 7.667038917541504 L 1.789880514144897 3.749898910522461 L 0.7506505250930786 1.316148996353149 L 3.377770662307739 0.9998990297317505 L 11.7501802444458 5.833659172058105 L 20.12258148193359 0.9998990297317505 L 22.74970054626465 1.316148996353149 L 21.70952033996582 3.749898910522461 L 14.9252405166626 7.666769027709961 L 21.70952033996582 11.58363914489746 L 22.74970054626465 14.01834869384766 L 20.12162971496582 14.33363914489746 Z" stroke="none" fill="red"/>
//         </g>
//       </g>
//     </svg>
//   )
// }

// export default IconCrossing;






import React from 'react'

const IconCrossing = props => {
  return(
    <svg id="IconCrossing" xmlns="http://www.w3.org/2000/svg" width="64" height="88" viewBox="0 0 64 88">
      <defs>
        <style>
          {
            `
            #IconCrossing .a{fill:red;}
            #IconCrossing .b{fill:#161615;}
            #IconCrossing .c{fill:#ffc900;}
            #IconCrossing .d,
            #IconCrossing .e{stroke:none;}
            #IconCrossing .e{fill:#fff;}
            `
          }
        </style>
      </defs>
      <g transform="translate(2 2)">
        <g className="a" transform="translate(-5 -2)">
          <path className="d" d="M 35.02143478393555 87 C 33.45601272583008 87 31.98024749755859 86.30184173583984 30.97255325317383 85.08451843261719 C 22.86209487915039 75.26007080078125 4 50.44239044189453 4 32.20030975341797 C 4 27.98516654968262 4.818600177764893 23.8974494934082 6.433047294616699 20.05069732666016 C 7.992717742919922 16.33449745178223 10.22601222991943 12.99812030792236 13.0709056854248 10.13423824310303 C 15.91624736785889 7.269885063171387 19.2313175201416 5.021202564239502 22.92402267456055 3.450638055801392 C 26.74732971191406 1.824520349502563 30.81028175354004 1.00000274181366 35 1.00000274181366 C 39.18971633911133 1.00000274181366 43.25267028808594 1.824520349502563 47.07598876953125 3.450638055801392 C 50.76868057250977 5.021202564239502 54.0837516784668 7.269885063171387 56.92909240722656 10.13423824310303 C 59.77398681640625 12.99812030792236 62.00728225708008 16.33449745178223 63.56695175170898 20.05069732666016 C 65.181396484375 23.8974494934082 66 27.98516654968262 66 32.20030975341797 C 66 40.14572143554688 62.44013977050781 50.18409729003906 55.41930770874023 62.03661346435547 C 49.90928268432617 71.33860015869141 43.48876571655273 79.70274353027344 39.07288360595703 85.08139038085938 C 38.0626106262207 86.30184173583984 36.58684539794922 87 35.02143478393555 87 Z"/>
          <path className="e" d="M 35 2 C 18.41428756713867 2 5 15.50385284423828 5 32.20030975341797 C 5 50.19106292724609 23.94286346435547 74.99845886230469 31.74286270141602 84.44684600830078 C 32.59999847412109 85.48228454589844 33.81071090698242 86.00000762939453 35.02142715454102 86.00000762939453 C 36.23213958740234 86.00000762939453 37.44285583496094 85.48228454589844 38.29999923706055 84.44684600830078 C 46.05715179443359 74.99845886230469 65 50.19106292724609 65 32.20030975341797 C 65 15.50385284423828 51.58571243286133 2 35 2 M 35 0 C 39.3249626159668 0 43.51959991455078 0.851348876953125 47.46737670898438 2.530410766601563 C 51.27958679199219 4.151809692382813 54.70167541503906 6.472984313964844 57.6385498046875 9.429489135742188 C 60.57452392578125 12.38504791259766 62.87934875488281 15.82833862304688 64.48903656005859 19.66371154785156 C 66.15518951416016 23.63365173339844 67 27.8515625 67 32.20030975341797 C 67 40.32749938964844 63.39317321777344 50.53734970092773 56.27970123291016 62.54626083374023 C 50.73744964599609 71.90264892578125 44.28378677368164 80.31033325195313 39.84577560424805 85.71593475341797 L 39.84320068359375 85.71907043457031 L 39.84061431884766 85.72219848632813 C 38.64228820800781 87.16977691650391 36.88576126098633 88 35.02142333984375 88 C 33.15707397460938 88 31.40055084228516 87.16976165771484 30.20223617553711 85.72218322753906 C 26.57582473754883 81.32939910888672 19.61565017700195 72.48036193847656 13.7260856628418 62.54697418212891 C 6.608776092529297 50.54286193847656 3 40.33275985717773 3 32.20030975341797 C 3 27.8515625 3.844810485839844 23.63365173339844 5.510963439941406 19.66371154785156 C 7.120651245117188 15.82833862304688 9.42547607421875 12.38504791259766 12.3614501953125 9.429489135742188 C 15.29832458496094 6.472984313964844 18.72041320800781 4.151809692382813 22.53262329101563 2.530410766601563 C 26.48040008544922 0.851348876953125 30.6750373840332 0 35 0 Z"/>
        </g>
        <g transform="translate(776.088 1262.36)">
          <g className="b">
            <path className="d" d="M -727.9703369140625 -1213.359985351563 L -764.20556640625 -1213.359985351563 C -765.7949829101563 -1213.359985351563 -767.0880126953125 -1214.652954101563 -767.0880126953125 -1216.242309570313 L -767.0880126953125 -1228.974487304688 C -767.0880126953125 -1229.419189453125 -766.9828491210938 -1229.864868164063 -766.7838745117188 -1230.26318359375 L -755.0321044921875 -1253.766723632813 C -754.5407104492188 -1254.74951171875 -753.5528564453125 -1255.359985351563 -752.4539794921875 -1255.359985351563 L -739.7220458984375 -1255.359985351563 C -738.6231689453125 -1255.359985351563 -737.63525390625 -1254.74951171875 -737.1439208984375 -1253.7666015625 L -725.392333984375 -1230.263549804688 C -725.1931762695313 -1229.864868164063 -725.0880126953125 -1229.419189453125 -725.0880126953125 -1228.974487304688 L -725.0880126953125 -1216.242309570313 C -725.0880126953125 -1214.652954101563 -726.3810424804688 -1213.359985351563 -727.9703369140625 -1213.359985351563 Z"/>
            <path className="e" d="M -752.4539794921875 -1254.359985351563 C -753.1671142578125 -1254.359985351563 -753.81884765625 -1253.957153320313 -754.1376953125 -1253.319458007813 L -765.8892822265625 -1229.816284179688 C -766.0198974609375 -1229.554809570313 -766.0880126953125 -1229.266723632813 -766.0880126953125 -1228.974487304688 L -766.0880126953125 -1216.242309570313 C -766.0880126953125 -1215.202758789063 -765.2452392578125 -1214.359985351563 -764.20556640625 -1214.359985351563 L -727.9703369140625 -1214.359985351563 C -726.9306640625 -1214.359985351563 -726.0880126953125 -1215.202758789063 -726.0880126953125 -1216.242309570313 L -726.0880126953125 -1228.974487304688 C -726.0880126953125 -1229.266723632813 -726.1561279296875 -1229.554809570313 -726.2867431640625 -1229.816284179688 L -738.038330078125 -1253.319458007813 C -738.357177734375 -1253.957153320313 -739.009033203125 -1254.359985351563 -739.7220458984375 -1254.359985351563 L -752.4539794921875 -1254.359985351563 M -752.4539794921875 -1256.359985351563 L -739.7220458984375 -1256.359985351563 C -738.241943359375 -1256.359985351563 -736.911376953125 -1255.53759765625 -736.24951171875 -1254.2138671875 L -724.4978637695313 -1230.710693359375 C -724.2296142578125 -1230.173706054688 -724.0880126953125 -1229.573486328125 -724.0880126953125 -1228.974487304688 L -724.0880126953125 -1216.242309570313 C -724.0880126953125 -1214.1015625 -725.82958984375 -1212.359985351563 -727.9703369140625 -1212.359985351563 L -764.20556640625 -1212.359985351563 C -766.3463745117188 -1212.359985351563 -768.0880126953125 -1214.1015625 -768.0880126953125 -1216.242309570313 L -768.0880126953125 -1228.974487304688 C -768.0880126953125 -1229.573608398438 -767.9464111328125 -1230.173706054688 -767.678466796875 -1230.710083007813 L -755.926513671875 -1254.2138671875 C -755.2647094726563 -1255.53759765625 -753.93408203125 -1256.359985351563 -752.4539794921875 -1256.359985351563 Z"/>
          </g>
          <circle className="c" cx="4.706" cy="4.706" r="4.706" transform="translate(-762.559 -1226.595)"/>
          <circle className="c" cx="4.706" cy="4.706" r="4.706" transform="translate(-739.029 -1226.595)"/>
        </g>
      </g>
    </svg>
  )
}

export default IconCrossing;
