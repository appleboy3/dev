# Personal Landing Page

한재수님의 테스트용 개인 랜딩페이지입니다.

## 구성

- Tech 스타일의 반응형 단일 페이지
- Hero / About / Core Capabilities / Projects / Contact 섹션
- 라이트/다크 테마 토글(브라우저 저장)
- GitHub Pages 자동 배포 워크플로우

## 로컬 실행

```bash
python3 -m http.server 8000
```

`http://localhost:8000` 에 접속해 확인합니다.

## GitHub Pages 배포 절차

1. 원격 저장소 연결
2. 배포 브랜치(`main` 또는 현재 작업 브랜치 `work`)로 푸시
3. GitHub 저장소 `Settings → Pages → Build and deployment`에서 Source를 `GitHub Actions`로 지정
4. Actions 탭에서 `Deploy static site to GitHub Pages` 성공 여부 확인

배포 URL 형식:

- User/Org site: `https://<github-username>.github.io/`
- Project site: `https://<github-username>.github.io/<repository-name>/`
