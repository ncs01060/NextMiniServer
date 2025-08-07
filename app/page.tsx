// app/page.tsx
import Link from 'next/link';
export default function HomePage() {

  return (
    <div className='center'>
      <h1 className='Title Name'>Lee young min</h1>
      <p>이영민</p>
      <br/>
      <div className='Left'>
        <h2>Award</h2>
        <table className='tableAward'>
          <tr>
            <th>날자</th>
            <th>대회명</th>
            <th>상</th>
          </tr>
          <tr>
            <td>2022-07-21</td>
            <td>삼성 주니어 소프트웨어 창작대회</td>
            <td><strong className='red'>개발상</strong></td>
          </tr>
          <tr>
            <td>2024-07-11</td>
            <td>AI Youth Challenge</td>
            <td><strong className='red'>포스코DX 사장상</strong></td>
          </tr>
        </table>

      </div>
      <div className='Right'>
        <h2>Position</h2>
        <p>학생회 함</p>

      </div>
      <div className='height'>
        <Link href={'/posts'}>블로그 보러가기</Link>
      </div>
    </div>
  );
}