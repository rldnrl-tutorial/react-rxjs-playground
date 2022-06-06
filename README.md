# React + RxJS

## Motivation

RxJS는 Angular와 같이 사용합니다. 그런데 왜 사용하며, 어떤 이점이 있는지 궁금해서 한 번 정리해보려합니다.

## [ReactiveX란?](https://reactivex.io/intro.html)

ReactiveX는 관찰 가능한(Observable) 시퀀스를 사용하여 비동기 및 이벤트 기반 프로그램을 구성하기 위한 라이브러리입니다.

데이터 또는 이벤트의 시퀀스를 지원하도록 Observer 패턴을 확장하고 사물에 대한 개념을 추상화하면서 선언적으로 시퀀스를 함께 구성할 수 있는 연산자를 추가합니다. (low-level threading, synchronization, thread-safety, concurrent data structures, and non-blocking I/O.)

때로는 "functional reactive programming"이라고도 하지만 이는 잘못된 이름입니다. ReactiveX는 functional일 수도 있고 reactive일 수도 있지만 "functional reactive programming"은 다릅니다. 한 가지 주요 차이점은 functional reactive programming은 시간이 지남에 따라 지속적으로 변경되는 값에서 작동하는 반면, ReactiveX는 시간이 지남에 따라 방출되는 이산 값에서 작동한다는 것입니다. ([functional reactive programming에 대한 보다 정확한 정보는 Conal Elliott의 작업을 참조하십시오.](https://github.com/conal/talk-2015-essence-and-origins-of-frp))

## Reactive Programming이란?

Reactive Programming을 사용하면 비동기식 데이터 스트림을 중심으로 작업이 계속 진행됩니다. 여기서 중요한 점은 일이 일어나야 하는 순서입니다. 반면, 명령형 방법은 컴퓨터가 작업을 수행하는 순서에만 관심이 있습니다.

## Reactive UI Programming & RxJS

UI 프로그래밍은 본질적으로 비동기식입니다. UI는 사용자 작업을 기다리고 해당 작업에 대한 반응으로 작업을 수행합니다. 결과적으로 사용자 작업을 비동기적으로 처리하는 반응형 프레임워크가 명령형 UI 프레임워크보다 더 자연스럽게 적합합니다. 이 이점은 간단한 "hello world" 예제에서는 분명하지 않을 수 있습니다. 그러나 대화형 UI를 구축할 때 반응형 프로그래밍은 코드를 관리 가능하고 예측 가능하며 버그를 줄입니다.

스위치와 전구는 반응 프로그래밍을 이해하기 위한 간단한 실제 비유입니다. 전구는 스위치 상태의 변경을 기다립니다. 스위치 상태가 변경되면 현재 스위치 상태에 따라 발광을 시작하거나 중지합니다. 반응형 프로그램은 스위치 상태의 변경을 기다리고 발생했을 때 이에 반응합니다.

![image](https://user-images.githubusercontent.com/81848094/172101345-29524198-2c67-4b09-8c73-bbfe282ba8f2.png)

RxJS는 반응형 코드를 작성할 수 있는 API를 제공하는 JavaScript 라이브러리입니다. 그 중심에는 RxJS Observable이 있습니다. Observable은 이벤트 스트림을 제공하고 이러한 이벤트에 반응하는 코드를 작성합니다.

## RxJS Observables, Streams & Related Concepts

스트림은 시간에 따라 정렬된 진행 중인 이벤트의 시퀀스입니다. (ex. 사용자가 화면에서 마우스를 움직일 때 일련의 마우스 포인터 위치.) RxJS Observables를 사용하면 스트림이 이벤트의 시퀀스일 필요가 없습니다. 모든 데이터의 시퀀스일 수 있습니다. (ex. 우리의 소셜 미디어 피드 또는 비디오 스트림 요청에 대한 응답 청크.) RxJS 라이브러리는 이러한 Observable(즉, 스트림의 데이터)을 사용하는 API를 제공합니다. 우리는 Observable을 구독함으로써 그렇게 합니다. Observable에서 데이터를 기다리는 코드는 Observer입니다. Observer는 수신된 스트림 데이터에 대해 몇 가지 작업을 수행할 수 있습니다.

![image](https://user-images.githubusercontent.com/81848094/172101433-4cef73e1-c5bd-4dd7-9a81-9fce4ab157ed.png)

RxJS는 또한 수신된 스트림 데이터에 대한 작업을 작성하는 데 도움이 되는 기능을 제공합니다. 이를 RxJS Operator라고 합니다. 일부 RxJS Operator는 스트림을 생성하거나 결합하는 기능도 제공합니다. 또는 한 스트림을 다른 스트림(예: 파이프)에 대한 입력으로 전달합니다. 이러한 스트림을 함께 쌓으면 최소한의 코드로 강력한 비동기 환경을 구축하는 데 도움이 될 수 있습니다.

## Why Not Promises?

Observable과 마찬가지로 Promise를 사용하면 비동기식 이벤트를 프로그래밍할 수 있습니다. 그리고 Promise는 이미 ES6 JavaScript의 일부입니다. 사실, 다른 많은 라이브러리와 프레임워크를 사용한 UI 프로그래밍은 Promise에 의존합니다.

그러나 Angular 팀은 RxJS Observables를 활용하기로 결정했습니다. 이것은 많은 Angular 기능이 Observable을 중심으로 구축되었음을 의미합니다. 따라서 이러한 Angular 기능을 활용하려면 RxJS Observable을 사용하는 것이 이상적입니다.

또한 RxJS Observables는 Promise와 함께 사용할 수 있는 수퍼 세트 기능을 제공합니다. Promise는 비동기 호출에서 내보낸 첫 번째 값만 전달할 수 있습니다. Observable은 여러 값을 방출할 수 있습니다. 또한 Observable을 처리할 수 있는 많은 수의 RxJS 연산자를 통해 몇 줄의 코드로 맞춤형 스트림을 구축할 수 있습니다. 이것은 Promise으로는 불가능합니다.

### 참고
- [ReactiveX](https://reactivex.io/intro.html)
- [RxJS Observables for Angular Programming: What Problem Do They Solve?](https://www.tezify.com/post/rxjs-observables-for-angular-programming/)
