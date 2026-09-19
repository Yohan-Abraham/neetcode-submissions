class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let mapS = new Map();
        let mapT = new Map();

        if(s.length != t.length){
            return false;
        }

        for(const str of s){
            if(mapS.has(str)){
                mapS.set(str, mapS.get(str) + 1);
                continue;
            }
            mapS.set(str, 1);
        }

        for(const str of t){
if(mapT.has(str)){
                mapT.set(str, mapT.get(str) + 1);
                continue;
            }
            mapT.set(str, 1);
            
    }
    
    for(const str of s){
        if(!mapT.has(str)){
            return false;
        }
        if(mapT.get(str) !== mapS.get(str)){
            return false;
        }
    }
    return true
}
}