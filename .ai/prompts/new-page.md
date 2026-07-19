1. 직접 URL을 쳐야지만 접속이 가능한 페이지를 하나 생성
2. 상단에는 간단한 인적사항과 경력사항이 나오면 좋겠어
3. 하단에는 career.ts를 resume-home.tsx의 아래 소스 처럼 동일한 스타일로 보여주면 좋겠어
<section className="blog-shell !px-0 !pt-0 mt-20 sm:mt-24 lg:mt-32">
<CareerSidebar />
<div className="min-w-0">
    <CareerDetail projects={careerProjects} />
</div>
</section>