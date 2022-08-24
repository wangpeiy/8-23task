function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

async function main() {
    await sleep(3000)
    console.log('你好')
}

main() // 延迟三秒打印你好