import json
import time
from datetime import datetime
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import os

def fetch_and_save_products():
    # 크롬 옵션 설정
    chrome_options = Options()
    chrome_options.add_argument("--headless")  # 브라우저 창을 띄우지 않음
    chrome_options.add_argument("--disable-gpu")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--window-size=1920,1080")
    chrome_options.add_experimental_option("detach", True)

    # 크롬 드라이버 생성
    driver = webdriver.Chrome(options=chrome_options)

    try:
        ranking_url = "https://www.oliveyoung.co.kr/store/main/getBestList.do?t_page=%ED%99%88&t_click=GNB&t_gnb_type=%EB%9E%AD%ED%82%B9&t_swiping_type=N"
        driver.get(ranking_url)

        wait = WebDriverWait(driver, 20)

        # 제품 목록이 로드될 때까지 대기
        wait.until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, "ul.cate_prd_list li")))

        # 모든 제품 요소 가져오기
        product_elements = driver.find_elements(By.CSS_SELECTOR, "ul.cate_prd_list li")

        products = []
        for idx, product in enumerate(product_elements[:100]):  # 최대 100개 제품
            try:
                # 랭킹 번호 설정 (순서 기반)
                rank = idx + 1

                # 제품 링크 및 이미지
                prd_info = product.find_element(By.CSS_SELECTOR, "div.prd_info a.prd_thumb")
                href = prd_info.get_attribute('href')
                img = prd_info.find_element(By.TAG_NAME, 'img').get_attribute('src')

                # 브랜드명 및 제품명
                prd_name = product.find_element(By.CSS_SELECTOR, "div.prd_name a")
                brand = prd_name.find_element(By.CLASS_NAME, "tx_brand").text.strip()
                name = prd_name.find_element(By.CLASS_NAME, "tx_name").text.strip()

                # 가격 정보
                prd_price = product.find_element(By.CLASS_NAME, "prd_price")
                try:
                    original_price = prd_price.find_element(By.CSS_SELECTOR, "span.tx_org span.tx_num").text.strip().replace(',', '').replace('원', '')
                except:
                    original_price = None
                try:
                    discounted_price = prd_price.find_element(By.CSS_SELECTOR, "span.tx_cur span.tx_num").text.strip().replace(',', '').replace('원', '')
                except:
                    discounted_price = None

                # 데이터 구성
                product_data = {
                    "rank": rank,
                    "name": name,
                    "href": href,
                    "brand": brand,
                    "original_price": original_price,
                    "discounted_price": discounted_price,
                    "image": img
                }

                products.append(product_data)
                print(f"{rank}. {name} 데이터 수집 완료. (랭킹: {rank})")

            except Exception as e:
                print(f"{idx + 1}. 제품 데이터 수집 중 오류 발생: {e}")
                continue

        # JSON 파일에 기존 데이터가 있으면 불러오기
        json_file_path = os.path.join(os.path.dirname(__file__), 'olive.json')
        if os.path.exists(json_file_path):
            with open(json_file_path, 'r', encoding='utf-8') as f:
                try:
                    existing_data = json.load(f)
                except json.JSONDecodeError:
                    existing_data = []
        else:
            existing_data = []

        # 새로운 스크랩 데이터 추가
        timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
        new_entry = {
            "scraped_at": timestamp,
            "products": products
        }
        existing_data.append(new_entry)

        # 업데이트된 데이터 저장
        with open(json_file_path, 'w', encoding='utf-8') as f:
            json.dump(existing_data, f, ensure_ascii=False, indent=4)

        print(f"데이터가 {json_file_path} 파일에 저장되었습니다. ({timestamp})")

    except Exception as e:
        print(f"페이지 처리 중 오류 발생: {e}")

    finally:
        driver.quit()

def main():
    while True:
        print("제품 데이터 수집 시작:", datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
        fetch_and_save_products()
        print("다음 수집까지 3시간 대기합니다.\n")
        time.sleep(3 * 60 * 60)  # 3시간 대기

if __name__ == "__main__":
    main()