import { Button, Flex, Typography } from '@neo4j-ndl/react';
import { useNavigate } from 'react-router-dom';

import NotFoundImg from '../assets/NotFound.png';

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className='n-bg-palette-neutral-bg-default flex items-center justify-center min-h-screen p-12'>
      <img src={NotFoundImg} className='p-12' />
      <Flex gap='8'>
        <Typography variant='h1'>404 - 페이지를 찾을 수 없습니다</Typography>
        <Typography variant='body-medium'>
          <p>요청하신 페이지가 존재하지 않거나 현재 이용할 수 없습니다.</p>
          <p>잠시 후 다시 시도해 주시고, 문제가 계속되면 문의해 주세요.</p>
        </Typography>
        <Button onClick={() => navigate(-1)}>뒤로 가기</Button>
      </Flex>
    </div>
  );
}
