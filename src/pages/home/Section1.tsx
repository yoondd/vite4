import { useEffect, useState } from "react";
import '../../assets/sass/Section1.scss';

const Section1 = () => {

    //내가 지금 글자가 나올 상황인가? 글자가 한템포 늦게 나와야겠다
    const [ textActive, settextActive ] = useState<boolean>(false);

    //원 출력상황인가. (원이 보여야하는 상태인가)
    const [ showCircle, setshowCircle ] = useState<boolean>(false);

    //이미지가 변할건데, 변하는 이미지의 인덱스 값을 넣어야겠다
    const [ bgIdx, setbgIdx ] = useState(0);


    const bgImages = [
        'img/img1.jpg',
        'img/img2.jpg',
        'img/img3.jpg'
    ]

    useEffect(()=>{
        //1초후에 글자가 올라오도록 구현하기 위함
        const timer = setTimeout(()=> settextActive(true),1000);
        return ()=> clearTimeout(timer); //사이트 집인 후 1초도 지나지않아 이탈하는 경우대응.
    }, []); // []은 처음에 딱 1번만 해라.


    //밑에서 만든 단추를  onclick했을때 실행할 함수
    const showNext = () => {
        setshowCircle(true);
        setTimeout(()=>{
            // 클릭했을떄 다음 그림으로 바뀔 수 있도록.
            setbgIdx( prevIndex => (prevIndex+1) % bgImages.length );
        }, 500)

        setTimeout(()=>{
            // 다음을 기약하기위함.. 다음에도 동그라미 나오라고.
            setshowCircle(false);
        }, 2000)

    }


    return (
        <div className="section1">
            {
                bgImages.map( ((item, idx)=>(
                    <img key={idx} src={item} alt={`image${idx}`} className={`imgbg ${bgIdx === idx ? "on" : ""}`}/>
                ) ))
            }
            <div className={`textbox ${textActive ? "texton": ""}`}>
                <h2>Make innovative stories well</h2>
                <button onClick={showNext}>Next Slide</button>
            </div>

            {  /*동그랗게 펼쳐질 친구*/
                showCircle && <div className="big-circle"/>
            }
        </div>
    );
};

export default Section1;