function getObject(o){
    if (!getObject) { return null; };
    o = (typeof o == 'string') ? document.getElementById(o) : o;
    return o;
}
if (typeof photo_list != 'function'){
    var photo_list=function (){
        var a;
        var img;
        var title;
    }
}

/*��������*/
var plist=getObject("photo_lists");
plist.style.display='none';
var Photos=new Array();
var Num=0;
if(plist){
    var n=plist.getElementsByTagName("p");
    for (var i=0;i<n.length;i++){
        var p=new photo_list();
        p.a=n[i].getElementsByTagName("A")[0];
        p.img=n[i].getElementsByTagName("IMG")[0];
        p.title=p.a.innerHTML;
        if(p.a&&p.img&&p.title){
            Photos[Num]=p;Num++;
        }
    }
    var focus_photo_nav=getObject("focus_photo_nav");
    for (var i=1;i<Photos.length+1;i++){
        var y=document.createElement("a");
        y.appendChild(document.createTextNode(i));
        y.id="xxjdjj"+i;
        y.className="axx";
        y.target="_self";
        y.href="javascript:changeimg("+i+");";
        focus_photo_nav.appendChild(y);
    }
}
/*�����������*/

var nn=1; //��ǰ����ʾ�Ĺ���ͼ
var key=0; //��ʶ�Ƿ�Ϊ��һ�ο�ʼִ��
var tt; //��ʶ����

function change_img()
{
    if(key==0){key=1;} //�����һ��ִ��KEY=1����ʾ�Ѿ�ִ�й�һ���ˡ�
    else if(document.all)//document.all��IE6/7��ʶ��firefox����ִ�д˶�����
    {
        getObject("focus_photo_pic").filters[0].Apply(); //���˾�Ӧ�õ�������
        getObject("focus_photo_pic").filters[0].Play(duration=2); //��ʼת��
        getObject("focus_photo_pic").filters[0].Transition=23;//ת��Ч��
    }

    getObject("focus_photo_pic").src=Photos[nn-1].img.src; //�滻ͼƬ
    getObject("focus_photo_url").href=Photos[nn-1].a.href; //�滻URL
    getObject("focus_title_url").href=Photos[nn-1].a.href; //�滻URL
    getObject("focus_title_url").innerHTML=Photos[nn-1].title; //�滻title

    for (var i=1;i<=Num;i++){
        getObject("xxjdjj"+i).className='axx'; //����������ϵ��������ӱ�Ϊδѡ��״̬
    }
    getObject("xxjdjj"+nn).className='bxx'; //����ǰҳ���ID����Ϊѡ��״̬
    nn++;
    if(nn>Num){nn=1;} //���ID������ͼƬ���������ͷ��ʼѭ��
    tt=setTimeout('change_img()',7000); //��4�������ִ��change_img()����.
}
function changeimg(n)//��������ϵ�����ִ�еķ�����
{
    nn=n; //��ǰҳ���ID���ڴ����Nֵ,
    window.clearInterval(tt); //�������ѭ����TT
    //����ִ��change_img();��change_img()�������õ�ͼƬID�Ѿ��ڴ˴����޸�,�����ID����ʼִ��.
    change_img();
}
//��ʼִ�й�������
change_img();
