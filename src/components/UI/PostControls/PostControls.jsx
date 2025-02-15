// import React from 'react';

// const PostControls = () => {
//     const [limitPosts, setLimitPosts] = useState(10);
//     const [selectedSort, setSelectedSort] = useState('');

//     const sortPosts = (sort) => {
//         setSelectedSort(sort);
//     }

//     const changeLimitPosts = (limit) => {
//         setLimitPosts(limit);
//     }

//     const sortedPosts = useMemo(() => {
//         if (!selectedSort) return posts;

//         return [...posts].sort((a, b) => {
//             const aValue = a.breeds?.[0]?.[selectedSort] ?? '';
//             const bValue = b.breeds?.[0]?.[selectedSort] ?? '';
//             return aValue.localeCompare(bValue);
//         });
//     }, [posts, selectedSort]);

//     return (
//         <div>
//             <MyInput placeholder='search...' />
//             <MySelect
//                 value={selectedSort}
//                 onChange={sortPosts}
//                 defaultVal='Sort by'
//                 options={[
//                     { value: 'name', name: 'Sort by name' },
//                     { value: 'breed_group', name: 'Sort by bred' },
//                     { value: '', name: 'Without sorting' }
//                 ]}
//             ></MySelect>
//             <MySelect
//                 value={limitPosts}
//                 onChange={changeLimitPosts}
//                 defaultVal={limitPosts}
//                 options={[
//                     { value: '10', name: '10' },
//                     { value: '15', name: '15' },
//                     { value: '20', name: '20' },
//                     { value: '25', name: '25' }
//                 ]}
//             ></MySelect>
//         </div>
//     );
// };
// export default PostControls;