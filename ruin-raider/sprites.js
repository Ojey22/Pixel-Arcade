// Pixel art for Ruin Raider, drawn from text. '.' = transparent, 'e' = body colour, 'x' = highlight.
const RR=(()=>{
const pal={h:'#6b3b1e',s:'#f2b27a',r:'#d64550',t:'#8f2d3a',p:'#3a4a9f',b:'#4a2a14',y:'#ffd23f',w:'#fff',k:'#1a0f2e',d:'#ff2d55'};
const make=(rows,body,hi='#fff')=>{const c=document.createElement('canvas'),s=c.getContext('2d');c.width=rows[0].length;c.height=rows.length;
  rows.forEach((r,j)=>[...r].forEach((ch,i)=>{const col=ch=='e'?body:ch=='x'?hi:pal[ch];if(col){s.fillStyle=col;s.fillRect(i,j,1,1)}}));return c};
// hero: human archer, 12x16, two walk frames (shared upper body + two leg poses)
const UP=['...hhhhh....','..hhhhhhh...','..hssssss...','..sssskss...','...ssssss...','..rrrrrrr...','.srrrtrrrsyy','..rrrttrr.y.','..rrrrrrr.y.','..yyyyyyy...'];
const LA=['..ppp.ppp...','..ppp.ppp...','..ppp.ppp...','..ppp.ppp...','..bbb.bbb...','.bbbb.bbbb..'];
const LB=['...ppppp....','..ppp..ppp..','.ppp....ppp.','.ppp....ppp.','.bbb....bbb.','bbbb....bbbb'];
// walker (goblin in the jungle, skeleton in the castle): recoloured with 'e'
const HT=['...eeeeee...','..eeeeeeee..','..edeeeede..','..eeeeeeee..','...eekkee...','..keeeeeek..','.keeeeeeeek.','.keekeekeek.','..eeeeeeee..'];
const HA=['..eee..eee..','..eee..eee..','..eee..eee..','..kkk..kkk..','.kkkk..kkkk.'];
const HB=['...eeeeee...','..eee..eee..','.eee....eee.','.kkk....kkk.','kkkk....kkkk'];
const BU=['k..........k','kk...ee...kk','kek.eeee.kek','.kkeeddeekk.','..k.eeee.k..','.....kk.....'];
const BD=['............','..k..ee..k..','.kkkeeeekkk.','kkeeeddeeekk','k..keeeek..k','.....kk.....'];
const BR=['....eeeeee....','...eeeeeeee...','...edeeeede...','...eeeeeeee...','...ekkkkkke...','.eeeeeeeeeeee.','eeeekeeeekeeee','eeeeeeeeeeeeee','.eeeeeeeeeeee.','..eeeeeeeeee..','..eeee..eeee..','..eeee..eeee..','..kkkk..kkkk..','.kkkkk..kkkkk.'];
const HR=['.ee.ee.','exeeeee','eeeeeee','.eeeee.','..eee..','...e...'];
return{make,hero:[make(UP.concat(LA)),make(UP.concat(LB))],hum:c=>[make(HT.concat(HA),c),make(HT.concat(HB),c)],
  bat:c=>[make(BU,c),make(BD,c)],brute:c=>make(BR,c),heart:[make(HR,'#ff2d55'),make(HR,'#2b1b5e','#2b1b5e')]};
})();
