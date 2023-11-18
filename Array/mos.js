// "Mo's Algorithm," 
// it is a technique used in competitive programming to efficiently answer offline range queries. 
// It's particularly useful for problems involving sorting and querying subarrays.

function moAlgorithm(arr, queries) {
    const blockSize = Math.ceil(Math.sqrt(arr.length));
    
       queries.sort((a, b) => {
        const blockA = Math.floor(a[0] / blockSize)
        const blockB = Math.floor(b[0] / blockSize)
        if(blockA !== blockB){
            return blockA - blockB
        }
        return a[1] - b[1];
       })

    //    Set initial values
    let currentAnswer = 0;
    let left = 0;
    let right = -1;

    // Process Queries

    for(const query of queries){
        const [queryLeft, queryRight] = query;

        // move the right pointer to right
        while (right < queryRight){
            right++;
            currentAnswer += arr[right]
        }

        //move the left pointer to left
        while (left > queryLeft){
            left--;
            currentAnswer += arr[left]

        }

        //move the left pointer to the right
        while (left < queryLeft){
            currentAnswer += arr[left]
            left++
        }

        console.log(`Query [${queryLeft}, ${queryRight}] Result: ${currentAnswer}`);
    }
}

// Example usage
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const queries = [[1, 4], [2, 7], [0, 3]];

moAlgorithm(array, queries);


// Reference Video
// https://www.youtube.com/watch?v=rF4FKjwOl4Q&t=9s
