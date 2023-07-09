const Introduction = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-[1rem]">
        <span className="text-black text-[2.8rem] font-bold">
          김재현<span className="text-azure">.</span>
        </span>
        <span className="text-gray text-[1.4rem] font-medium">
          프론트엔드 개발자
        </span>
      </div>
      <div className="flex flex-col content-center align-left text-gray text-[1.4rem] font-medium px-[1rem]">
        <span>GitHub: https://github.com/hanyugeon</span>
        <span>Blog: https://hanyugeon.tistory.com</span>
        <span>E-mail: hanyugeon@naver.com</span>
        <span>Phone: 010-7593-6115</span>
      </div>
    </div>
  );
};

export default Introduction;
