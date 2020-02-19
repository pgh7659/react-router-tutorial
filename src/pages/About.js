import React from 'react';
import queryString from 'query-string';

const About = ({ location, match }) => {
    const query = queryString.parse(location.search);
    // URL 쿼리를 만들 때 주의점 : 받아오는 값들은 모두 문자열
    // 따라서 비교를 해야 할 땐 boolean 을 불러오던 숫자를 불러오던, 문자열 형태로 비교를 하거나, 알맞는 형태로 변환을 시킨다음에 비교
    const detail = query.detail === 'true';
    console.log(match);

    return (
        <div>
            <h2>About {match.params.name}</h2>
            {detail && 'detail: blahblah'}
        </div>
    );
}

export default About;