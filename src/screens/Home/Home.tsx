import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAdvice, getTranslatedAdvice } from "../../api";
import { Box, Text, Container, Button } from "./styles";

export default function Home() {
  const [advice, setAdvice] = useState("");
  const [isInvalidate, setIsInvalidate] = useState(false);

  const queryClient = useQueryClient();

  const { isLoading } = useQuery(["/advice"], getAdvice, {
    onSuccess: async (data) => {
      const translatedAdvice = await getTranslatedAdvice(data);
      setAdvice(translatedAdvice);
    },
  });

  useEffect(() => {
    queryClient.invalidateQueries(["/advice"]);
    setIsInvalidate(false);
  }, [isInvalidate === true]);

  return (
    <Container>
      <Box>
        <Text>
          {isLoading || queryClient.isFetching() ? "Carregando..." : advice}
        </Text>
      </Box>
      <Button title={"Buscar"} onPress={() => setIsInvalidate(true)} />
    </Container>
  );
}
