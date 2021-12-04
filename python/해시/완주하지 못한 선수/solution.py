def solution(participant, completion):
    participant.sort()
    completion.sort()
    for p,c in zip(participant, completion):
        if p != c:
            return p
    return participant.pop()

arr = ["abbbbbb","acb",3,2,4]


def sortt(arr):
    print(arr)
    arr.sort()
    print(arr)

sortt(arr)


