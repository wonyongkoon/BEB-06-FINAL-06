import React from 'react'
import './NFTItemList.css'
import NFTItem from './NFTItem'
import Pagination from "react-js-pagination";
import {useState} from "react";

const NFTItemlist = ({nftitem, loadpage}) => {
    // NFT아이템 종류를 앞에서 받아오게끔 수정 필요
    const itemCount = 3;
    const [page, setPage] = useState(1); // 현제 페이지를 기억해줌
    const offset = (page - 1) * itemCount; // 10 -1 * 10
    // console.log(nftitem)
    const handlePageChange = (page) => {
        setPage(page);
    };

    return (
        <div className="nftitemList">

            <div className='nftitemListItem'>
                {
                    nftitem 
                        // .slice(offset, offset + itemCount)  // 페이지로 구현시 주석 해제
                        .map((punk) => (
                            <div key={punk.id}>
                                <NFTItem 
                                    id={punk.id} 
                                    name={punk.nft_name} 
                                    image={punk.image_url} 
                                    price={punk.price}
                                    loadpage={loadpage}
                                    />
                            </div>
                        ))
                }
            </div>
            
            {/* 페이지네이션  */}
            {/* <div className="page">
                <Pagination className="Pagination" activePage={page}
                    // 현재 페이지
                    itemsCountPerPage={itemCount}
                    // 한 페이지랑 보여줄 아이템 갯수 (10)
                    totalItemsCount={totalItemCount}
                    // 총 아이템 갯수 // totalItemCount
                    pageRangeDisplayed={10}
                    // paginator의 페이지 범위
                    prevPageText={" ‹ "}
                    // "이전"을 나타낼 텍스트
                    nextPageText={" › "}
                    // "다음"을 나타낼 텍스트
                    onChange={handlePageChange}
                    // 페이지 변경을 핸들링하는 함수
                />
            </div> */}
        </div>
    )
}

export default NFTItemlist