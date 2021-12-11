def solution(participant, completion):
    participant.sort()
    completion.sort()
    print(participant)
    print(completion)
    arr = zip(participant, completion)
    print(arr)
    for p,c in zip(participant, completion):
        print(p)
        print(c)
        if p != c:
            print(p)
            return p
    return participant.pop()

arr = ["abbbbbb","acb",3,2,4]
arr2 = ["abbbbbb","acb",3]

solution(arr,arr2)

