const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Vinayak%20Nagar&g=Vinayak2k03&x=Vinayak2k03&l=vinayak2k03&i=https%3A%2F%2Fi.ibb.co%2F5WKSfQRh%2FWhats-App-Image-2025-09-07-at-00-05-56-58d82796.jpg&p=https%3A%2F%2Fvinayaknagar.tech&z=66af6";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
