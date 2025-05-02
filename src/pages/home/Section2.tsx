import { useEffect, useRef, useState } from "react";
import '../../assets/sass/Section2.scss'

const Section2 = () => {

    const sectionRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightTopRef = useRef<HTMLDivElement>(null);
    const rightBottomRef = useRef<HTMLDivElement>(null);

    const [ count1, setCount1 ] = useState(0);
    const [ count2, setCount2 ] = useState(100);

    //애니메이션이 되는지 안되는지 체크하겠다..
    const [ anitrue, setAnitrue ] = useState(false);


    useEffect(() => {

        // 내가 *뷰포트*에 들어왔는지 안들어왔는지 감지하는 것. 들어오면 콜백함수에 선언한 일을 실행해줌.
        const myobserver = new IntersectionObserver( ( [entry])=>{
            if(entry.isIntersecting  && !anitrue ) {//감지를 해라 라는 뜻.
                leftRef.current?.classList.add("active");


                setTimeout(() => {
                    rightTopRef.current?.classList.add("active");
                }, 500)

                setTimeout(() => {
                    rightBottomRef.current?.classList.add("active");
                    updateCount();
                }, 2000)

                setAnitrue(true); // 나는 이미 한번 실행했다. 라고 알려주는거다.
            }

        }, {threshold: 0.5 });    // threshold: 0.5정도 뷰포트에 들어왔을때를 이야기한다.

        if( sectionRef.current ) {
            myobserver.observe( sectionRef.current );
        }

        return () => {
            myobserver.disconnect()
        }
    }, [anitrue]); //anitrue가 true일때 실행해


    const updateCount = () => {
        let num1 = 0;
        let num2 = 1000;

        const time1 = setInterval( ()=>{
           num1 += 3;
           setCount1(num1);
           if( num1 > 100) {
               clearInterval(time1);
           }
        },50);

        const time2 = setInterval( ()=>{
            num2 += 103;
            setCount2(num2);
            if( num2 > 10000) { clearInterval(time2)}
        }, 50)
    }


    return (
        <section className="section2" ref={sectionRef}>
            <div className="left" ref={leftRef}>
                <h3>Our Story</h3>
            </div>
            <div className="right">
                <div className="top" ref={rightTopRef}>
                    <h4>우리의 삶이 건강해지고 당신의 비즈니스가 더 성장하는 스토리</h4>
                    <h5>고객의 삶과 비즈니스가 건강한 성장을 이룰 수 있도록 맞춤 서비스, 앞선 전문성, 새로운 연결로 차별화된 식음 솔루션을 제안하고 산업의 미래를 리딩하며 고객과 함께 성장하는 기업, 우리는 삼성웰스토리입니다</h5>
                </div>
                <div className="bottom" ref={rightBottomRef}>
                    <p className="count-text">
                        <span>{count1}</span>만 식
                    </p>
                    <p className="count-text">
                        <span>{count2.toLocaleString()}</span>개
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Section2;