var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d');
canvas.width=canvas.height=800;
ast();

function ast(){
    var a,b,c,d,e,f,h,n,p,q,r,s,x,y,pt,size,step,ki,gu,pr;
    size=10080;
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle="rgb(0,0,0)";
    ctx.fillRect(0,0,400,400);
    ctx.globalCompositeOperation = "lighter";
    ctx.fillStyle="hsla("+222+",60%,40%,0.5)";
    
    h=[];
    h[2]=0.3+Math.random()*0.2;
    h[3]=0.1+Math.random()*0.1;
    h[4]=(30+Math.random()*100)|0;
    h[5]=1+Math.random()*4;
    h[6]=1+Math.random();
    h[7]=1+Math.random();
    h[8]=0.4+Math.random()*0.2;
    for(a=2;a<8;a++)if(fi())h[a]*=-1;
    
    ki=[1,3,5,7,9,11,13];
    gu=[2,4,6,8,10];
    s=[];q=[];
    pr=(1+Math.random()*6|0)/7;
    for(a=0;a<2;a++){
        if(fi()){
            s[a]=[Math.cos,Math.sin];
            q[a]=rg(ki)-pr;
        }else{
            s[a]=[Math.sin,Math.cos];
            q[a]=rg(gu)+pr;
        }
    }
    for(a=2;a<8;a++){
        b=fi();
        if(!ki.length)b=0;
        if(!gu.length)b=1;
        q[a]=b ? rg(ki) : rg(gu);
        if(fi())q[a]*=-1;
        if(a>5)b=!b;
        s[a]=b ? Math.cos : Math.sin;
    }
    
    n=[];p=[];
    for(a=0;a<3;a++)n[a]=fi() ? 1 : -1;
    step=Math.PI/size*14;
    r=0;
    for(f=0;f<size*2;f++){
        b=s[6](r*q[6]+s[3](r*q[3])*h[5])*n[0];
        a=1+b*h[8];
        d=(Math.abs(b*(s[7](q[7]*r)+1)*h[4]))%2;
        if(d>1)d=2-1;
        e=1-d;
        d*=(2-a)*n[1];e*=(2-a)*n[2];
        c=s[4](r*q[4]+s[5](r*q[5])*h[7])/4*h[6]*(a-(1-h[8]));
        x=Math.sin(r*pr+c)*a+s[0][0](r*q[0])*h[2]*d+s[1][0](r*q[1])*h[3]*e;
        y=Math.cos(r*pr+c)*a+s[0][1](r*q[0])*h[2]*d+s[1][1](r*q[1])*h[3]*e;
        p[f]=[x*110+200,y*110+200];
        r+=step;
    }
    
    ctx.beginPath();
    for(a=0;a<p.length;a++){
        ctx.beginPath();
        for(b=0;b<3;b++){
            c=p[(a+b)%p.length];
            if(b){
                ctx.lineTo(c[0],c[1]);
            }else{
                ctx.moveTo(c[0],c[1]);
            }
        }
        ctx.fill();
    }
    
    function fi(){return (Math.random()<0.5);}
    function rg(ha){
        var a,b;
        a=(ha.length*Math.random())|0;
        b=ha[a];
        ha[a]=ha[ha.length-1];
        ha.pop();
        return b;
    }
}